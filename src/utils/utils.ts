export interface WrappedErrorTrace {
  file?: string;
  line?: number;
  function?: string;
  class?: string;
  type?: string;
  args?: Array<any>;
}

export type WrappedErrorTraceList = Array<WrappedErrorTrace>;

export interface WrappedError {
  message?: string;
  code?: number;
  class?: string;
  trace?: WrappedErrorTraceList;
}

export function getFileContents(fileName: string): string | null {
  for (const templateElm of document.querySelectorAll('template') as any) {
    if (templateElm.getAttribute('type') === 'apie/stacktrace-source' && templateElm.id === fileName) {
      const divElement = document.createElement('div');
      divElement.appendChild(templateElm.cloneNode(true));
      var el = document.createElement('div');
      return String(templateElm.innerHTML).replace(/\&[#0-9a-z]+;/gi, function (enc) {
        el.innerHTML = enc;
        return el.innerText
      });
    }
  }
  return null;
}