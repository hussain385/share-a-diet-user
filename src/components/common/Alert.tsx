import { View } from "react-native";
import Modal, { ModalProps } from "react-native-modal";

import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import { Colors } from "@/constants/Colors";
import { moderateScale } from "@/utils/common";

interface IAlert extends Partial<Omit<ModalProps, "isVisible" | "children">> {
  isOpen: boolean;
  header: string;
  body: string;
  buttons: { label: string; onPress: () => void }[];
}

function Alert({ isOpen, header, body, buttons, ...props }: IAlert) {
  return (
    <Modal isVisible={isOpen} backdropOpacity={0.56} {...props}>
      <View
        style={{
          backgroundColor: Colors.primary,
          padding: moderateScale(24),
          borderRadius: 28,
          opacity: 30
        }}
      >
        <Text
          variant="title-lg"
          style={{
            color: Colors.primary,
            fontSize: moderateScale(22),
          }}
        >
          {header}
        </Text>

        <Text
          variant="body-lg"
          style={{
            color: Colors.primary,
            marginTop: moderateScale(12),
          }}
        >
          {body}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: moderateScale(24),
            gap: moderateScale(10),
          }}
        >
          {buttons.map((b) => (
            <Button key={b.label} onPress={b.onPress} variant="ghost">
              {b.label}
            </Button>
          ))}
        </View>
      </View>
    </Modal>
  );
}

export default Alert;
