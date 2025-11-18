import type { platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import { Flex } from "@radix-ui/themes";
interface PlatformIconListProps {
  platforms: platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
    const ICON_MAP: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: MdPhoneIphone,
        nintendo: SiNintendogamecube,
        web: BsGlobe,   
    }
  return (
     <Flex direction={"row"} gap={"1"} className="platform-icon-list" aria-hidden={platforms.length === 0}>
        {platforms.map((p) => {
          const RenderIcon = ICON_MAP[p.slug];
          if (!RenderIcon) return null;
          return (
            <RenderIcon
              key={(p as any).id ?? p.slug}
              title={p.name}
              size={18}
              style={{ marginRight: 8 }}
            />
          );
        })}
      </Flex>
  )
};

export default PlatformIconList;
