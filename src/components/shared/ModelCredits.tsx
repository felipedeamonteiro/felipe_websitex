import clsx from 'clsx';
import useT from '../../i18n/useT';

const credits = [
  {
    label: '“Gaming Desktop PC” by Yolala1232',
    href: 'https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66',
  },
  {
    label: '“Stylized planet” by cmzw',
    href: 'https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70',
  },
  { label: 'CC BY 4.0', href: 'http://creativecommons.org/licenses/by/4.0/' },
];

/**
 * Attribution required by the CC BY 4.0 licence of the 3D models in
 * public/models. Render it on every page that shows one of the models.
 */
export default function ModelCredits({ className }: { className?: string }) {
  const t = useT();

  return (
    <p className={clsx('font-mono text-[11px] leading-6', className)}>
      {t.footer.modelCredits}{' '}
      {credits.map((credit, index) => (
        <span key={credit.href}>
          {index > 0 && ' · '}
          <a
            className="underline underline-offset-2 transition hover:text-(--g-accent-3)"
            href={credit.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {credit.label}
          </a>
        </span>
      ))}
    </p>
  );
}
