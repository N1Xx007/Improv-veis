import { IMAGES } from '../assets/images';

export function EventPhoto({ priority = false }: { priority?: boolean }) {
  return (
    <picture className="block">
      <source
        media="(min-width: 768px)"
        srcSet={IMAGES.eventDesktop}
        width={1672}
        height={941}
      />
      <img
        src={IMAGES.eventMobile}
        alt="Missionária Raquel Lopes com microfone no Congresso de Mulheres Improváveis"
        width={1024}
        height={1536}
        className="block w-full h-auto"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  );
}
