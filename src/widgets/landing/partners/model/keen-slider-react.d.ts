declare module 'keen-slider/react' {
    import { FC, Ref } from 'react';
  
    export interface KeenSliderOptions {
      loop?: boolean;
      renderMode?: 'performance' | 'precision';
      drag?: boolean;
      slides?: {
        perView: number;
        spacing: number;
      };
      created?: (slider: any) => void;
      updated?: (slider: any) => void;
      animationEnded?: (slider: any) => void;
    }
  
    export function useKeenSlider<T>(
      options?: KeenSliderOptions
    ): [Ref<T>, any];
  
    export const KeenSlider: FC<any>;
  }
  