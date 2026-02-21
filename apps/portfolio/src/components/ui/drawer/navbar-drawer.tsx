import { Button } from "@components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@components/ui/drawer/drawer";

type NavbarDrawerProps = {
  children?: React.ReactNode;
};

export default function NavbarDrawer({ children }: NavbarDrawerProps) {
  return (
    <Drawer modal={false}>
      <DrawerTrigger asChild>
        <Button
          className="w-full rounded-none px-4 py-6 hover:cursor-pointer"
          variant="ghost"
        >
          <i className="ph ph-list" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="px-4 py-4">
        <DrawerHeader>
          <DrawerTitle>Menü</DrawerTitle>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
