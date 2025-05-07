import { JSX } from "preact"
import readingTime from "reading-time"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"
import { Date } from "./Date"
import style from "./styles/contentMeta.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      // First line: Reading stats
      if (options.showReadingTime) {
        const { minutes, words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(
          <div class="reading-stats">
            {words} words, {displayedTime}
          </div>,
        )
      }

      // Second line: Last updated date
      if (fileData.dates?.modified) {
        segments.push(
          <div class="last-updated">
            Last updated at <Date date={fileData.dates.modified} locale={cfg.locale} />
          </div>,
        )
      }

      return <div class={classNames(displayClass, "content-meta")}>{segments}</div>
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
