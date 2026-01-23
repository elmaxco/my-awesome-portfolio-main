import { useEffect, useRef } from 'react';
import '@google/model-viewer';

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
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ensure model-viewer is loaded
    if (typeof window !== 'undefined' && !customElements.get('model-viewer')) {
      import('@google/model-viewer');
    }
  }, []);

  return (
    <model-viewer
      ref={viewerRef as any}
      src={src}
      alt={alt}
      auto-rotate={autoRotate}
      camera-controls={cameraControls}
      shadow-intensity={shadowIntensity}
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
