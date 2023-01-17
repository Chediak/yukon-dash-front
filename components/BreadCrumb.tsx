import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Skeleton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BreadItemProps {
  title: String;
  link: any;
}

export default function BreadCrumb({ items }: { items: BreadItemProps[] }) {
  const [breads, setBreads] = useState<BreadItemProps[]>();
  useEffect(() => {
    {
      items ? setBreads(items) : console.log("error");
    }
    
  }, []);
  return (
    <Breadcrumb alignContent={"center"}>
      {breads ? (
        breads?.map((item, index) => (
          <BreadcrumbItem key={index} h="30px">
            <Link href={item.link}>
              <BreadcrumbLink>{item.title}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        ))
      ) : (
        <Skeleton h="30px" />
      )}
    </Breadcrumb>
  );
}
