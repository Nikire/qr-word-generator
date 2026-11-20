// Una "plantilla" (red social, app de mensajería o enlace libre) es solo datos:
// qué campos pide el formulario y cómo se arma el enlace con ellos.
// Para sumar una red alcanza con agregar un archivo en ./defs/.
import type { Locale } from '../i18n/ui';

export type L10n = Record<Locale, string>;

export type FieldType = 'text' | 'textarea' | 'phone';

/**
 * Limpieza que se aplica a lo que escribe el usuario antes de armar el enlace:
 * - trim: quita espacios de los extremos.
 * - handle: usuario. Si pegaron la URL completa del perfil se queda con el
 *   último tramo, y quita la @ inicial.
 * - digits: deja solo los dígitos.
 * - url: antepone https:// si falta el esquema.
 */
export type Sanitize = 'trim' | 'handle' | 'digits' | 'url';

export interface FieldDef {
  /** Identificador; se usa como {id} en la plantilla del enlace. */
  id: string;
  /** 'phone' muestra el selector de país y entrega el número internacional completo, solo dígitos. */
  type: FieldType;
  required: boolean;
  maxLength?: number;
  /** Texto fijo que se muestra antes del campo, p. ej. "@". */
  prefix?: string;
  sanitize: Sanitize;
  /** Expresión regular (anclada) que debe cumplir el valor ya limpio. */
  pattern?: string;
  label: L10n;
  placeholder: L10n;
  hint?: L10n;
}

export interface ModeDef {
  id: string;
  label: L10n;
  /** Enlace con {campo} (codificado) o {campo:raw} (tal cual). Solo campos obligatorios. */
  template: string;
  /** Campos opcionales que se agregan como ?param=valor cuando tienen contenido. */
  query?: { param: string; field: string }[];
  fields: FieldDef[];
}

export interface NetworkIcon {
  /** Trazado en una caja de 24×24 (formato Simple Icons). */
  path: string;
  /** Color oficial de la marca, con numeral. */
  color: string;
  /** Usar ícono oscuro en vez de blanco (marcas de color muy claro). */
  darkGlyph?: boolean;
}

export interface NetworkDef {
  /** Slug de la URL: /instagram/ */
  id: string;
  name: string | L10n;
  icon: NetworkIcon;
  /** Si es false, el ícono se usa en el selector pero no en el centro del QR. */
  qrLogo?: boolean;
  /** Permite subir un logo propio (PNG o SVG) para el centro del QR. */
  logoUpload?: boolean;
  /** Título de la página. Por defecto: "Generador de código QR para {name}". */
  title?: L10n;
  /** Una oración que explica qué hace el QR de esta plantilla. */
  subtitle: L10n;
  /** Una o más variantes de enlace (perfil / empresa, usuario / teléfono…). */
  modes: ModeDef[];
  /** Preguntas frecuentes propias de la plantilla, además de las generales. */
  faq?: { q: L10n; a: L10n }[];
  /** Posición en el selector; sin valor, orden alfabético. */
  order?: number;
}
