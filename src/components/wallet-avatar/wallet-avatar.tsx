import type { AvatarComponent } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const WalletAvatar: AvatarComponent = ({ ensImage, size }) => {
  return ensImage ? (
    <Image
      src={ensImage}
      alt="Avatar"
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
    />
  ) : (
    <div
      className="flex flex-row justify-center items-center rounded-full "
      style={{
        height: size,
        width: size,
      }}
    >
      <Image
        src="/icons/smlogo.svg" 
        alt="Avatar"
        width={size - 15}
        height={size - 15}
      />
    </div>
  );
};

export default WalletAvatar;
