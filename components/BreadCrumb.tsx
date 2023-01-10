import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";

interface BreadItemProps {
  title: String;
  link: any;
}

export default function BreadCrumb({ items }: { items: BreadItemProps[] }) {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          <Link href={item.link}>
            <BreadcrumbLink>{item.title}</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
