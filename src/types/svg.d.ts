declare module '*.svg?react' {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
  
  declare module '*.svg' {
    const content: string;
    export default content;
  }
  