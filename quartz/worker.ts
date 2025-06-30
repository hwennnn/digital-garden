import sourceMapSupport from "source-map-support"
import cfg from "../quartz.config"
import { MarkdownContent, ProcessedContent } from "./plugins/vfile"
import {
  createFileParser,
  createHtmlProcessor,
  createMarkdownParser,
  createMdProcessor,
} from "./processors/parse"
import { BuildCtx, WorkerSerializableBuildCtx } from "./util/ctx"
import { FilePath } from "./util/path"
import { options } from "./util/sourcemap"
sourceMapSupport.install(options)

// only called from worker thread
export async function parseMarkdown(
  partialCtx: WorkerSerializableBuildCtx,
  fps: FilePath[],
): Promise<MarkdownContent[]> {
  const ctx: BuildCtx = {
    ...partialCtx,
    cfg,
  }
  return await createFileParser(ctx, fps)(createMdProcessor(ctx))
}

// only called from worker thread
export function processHtml(
  partialCtx: WorkerSerializableBuildCtx,
  mds: MarkdownContent[],
): Promise<ProcessedContent[]> {
  const ctx: BuildCtx = {
    ...partialCtx,
    cfg,
  }
  return createMarkdownParser(ctx, mds)(createHtmlProcessor(ctx))
}
