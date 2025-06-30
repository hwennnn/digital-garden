import { i18n } from "../i18n"
import { classNames } from "../util/lang"
import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title =
    displayClass == "desktop-only"
      ? (cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title)
      : "Digital Garden 🌱"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h3 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h3>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
