// Comportamiento compartido de las listas desplegables con buscador
// (selector de país y selector de plantilla). Solo navegador.

export const normalizeSearch = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

export interface Dropdown {
  options: HTMLElement[];
  /** Marca una opción como elegida. `notify` indica si fue una acción del usuario. */
  select(option: HTMLElement, notify?: boolean): void;
}

/**
 * Espera dentro de `root`: [data-dd-button], [data-dd-popover], [data-dd-search],
 * [data-dd-list] con hijos [role="option"] (cada uno con data-search) y [data-dd-empty].
 */
export function setupDropdown(
  root: HTMLElement,
  onSelect: (option: HTMLElement, notify: boolean) => void,
): Dropdown {
  const button = root.querySelector<HTMLButtonElement>('[data-dd-button]')!;
  const popover = root.querySelector<HTMLElement>('[data-dd-popover]')!;
  const search = root.querySelector<HTMLInputElement>('[data-dd-search]')!;
  const list = root.querySelector<HTMLElement>('[data-dd-list]')!;
  const empty = root.querySelector<HTMLElement>('[data-dd-empty]')!;
  const options = Array.from(list.querySelectorAll<HTMLElement>('[role="option"]'));

  let selected = options.find((option) => option.getAttribute('aria-selected') === 'true');
  let active: HTMLElement | undefined;

  const visible = () => options.filter((option) => !option.hidden);

  const setActive = (option: HTMLElement | undefined) => {
    active?.classList.remove('is-active');
    active = option;
    if (option) {
      option.classList.add('is-active');
      search.setAttribute('aria-activedescendant', option.id);
      option.scrollIntoView({ block: 'nearest' });
    } else {
      search.removeAttribute('aria-activedescendant');
    }
  };

  const select = (option: HTMLElement, notify = true) => {
    selected?.setAttribute('aria-selected', 'false');
    selected = option;
    option.setAttribute('aria-selected', 'true');
    onSelect(option, notify);
  };

  const filter = () => {
    const query = normalizeSearch(search.value.trim());
    let matches = 0;
    for (const option of options) {
      option.hidden = !option.dataset.search!.includes(query);
      if (!option.hidden) matches++;
    }
    empty.hidden = matches > 0;
    setActive(query ? visible()[0] : (selected ?? visible()[0]));
  };

  const open = () => {
    if (!popover.hidden) return;
    popover.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    search.value = '';
    filter();
    search.focus();
  };

  const close = (focusButton = true) => {
    if (popover.hidden) return;
    popover.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    if (focusButton) button.focus();
  };

  button.addEventListener('click', () => (popover.hidden ? open() : close()));
  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      open();
    }
  });

  search.addEventListener('input', filter);
  search.addEventListener('keydown', (event) => {
    const items = visible();
    const index = active ? items.indexOf(active) : -1;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActive(items[Math.min(index + 1, items.length - 1)]);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActive(items[Math.max(index - 1, 0)]);
        break;
      case 'Home':
        event.preventDefault();
        setActive(items[0]);
        break;
      case 'End':
        event.preventDefault();
        setActive(items[items.length - 1]);
        break;
      case 'Enter':
        event.preventDefault();
        if (active) {
          select(active);
          close();
        }
        break;
      case 'Escape':
        event.preventDefault();
        close();
        break;
      case 'Tab':
        close(false);
        break;
    }
  });

  list.addEventListener('click', (event) => {
    const option = (event.target as HTMLElement).closest<HTMLElement>('[role="option"]');
    if (!option) return;
    select(option);
    close();
  });

  document.addEventListener('pointerdown', (event) => {
    if (!root.contains(event.target as Node)) close(false);
  });

  return { options, select };
}
