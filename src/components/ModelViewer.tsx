import { useEffect } from 'react';
import { useNearViewport } from '@/hooks/use-near-viewport';

interface ModelViewerProps {
  src: string;
  alt?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  shadowIntensity?: string;
  className?: string;
  style?: React.CSSProperties;
  disableZoom?: boolean;
  touchAction?: string;
}

const ModelViewer = ({
  src,
  alt = '3D Model',
  autoRotate = true,
  cameraControls = true,
  shadowIntensity = '1',
  className = '',
  style = {},
  disableZoom = false,
  touchAction = 'pan-y'
}: ModelViewerProps) => {
  const { elementRef: viewerRef, isNearViewport } = useNearViewport<HTMLElement>();

  useEffect(() => {
    if (isNearViewport && !customElements.get('model-viewer')) {
      void import('@google/model-viewer');
    }
  }, [isNearViewport]);

  return (
    <model-viewer
      ref={viewerRef}
      src={isNearViewport ? src : undefined}
      alt={alt}
      auto-rotate={autoRotate}
      camera-controls={cameraControls}
      shadow-intensity={shadowIntensity}
      loading="lazy"
      touch-action={touchAction}
      disable-zoom={disableZoom}
      style={{
        width: '100%',
        height: '100%',
        ...style
      }}
      className={className}
    />
  );
};

export default ModelViewer;
