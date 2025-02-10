import Link from "next/link";

export default function Breadcrumb(props: { link: string; title: string; pos: string; isLast: boolean; }) {
  let linktag;
  if (!props.isLast) {
    linktag = <Link href={props.link} itemProp="item"><span itemProp="name">{props.title}</span></Link>;
  } else {
    linktag = <span itemProp="name">{props.title}</span>;
  }
  return(
            <li className="c-breadcrumb_list--item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {linktag}
              <meta itemProp="position" content={props.pos} />
            </li>
  )    
}