/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';

export default function CustomLink({ href, ...rest }) {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return <Link href={href}></Link>;
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
}