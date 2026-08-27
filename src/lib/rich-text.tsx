import { Fragment, type ReactNode } from "react";

/**
 * Metrics in the copy are wrapped in `**…**`.
 *
 * This turns them into <strong> without `dangerouslySetInnerHTML`, so the data
 * files stay plain strings that cannot inject markup. Anything that is not a
 * matched pair is printed literally.
 *
 * The colour lift matters as much as the weight: bullets render in
 * `text-muted-foreground`, and a bold run in the same muted colour barely reads.
 */
export const highlight = (text: string): ReactNode =>
  text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith("**") && chunk.endsWith("**") && chunk.length > 4 ? (
      <strong key={i} className="font-semibold text-foreground">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{chunk}</Fragment>
    )
  );
