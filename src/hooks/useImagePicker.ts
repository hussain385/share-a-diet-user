import { useState, useCallback } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {imagePickerOptions} from "@/constants/common";

const useImagePicker = () => {
    const options = imagePickerOptions
    const [image, setImage] = useState<{uri: string | undefined; type: string | undefined; name: string | undefined;} | null>(null);
    const [isImagePickerPopupVisible, setImagePickerPopupVisibility] = useState(false);

    const toggleImagePickerPopup = () => setImagePickerPopupVisibility(prev => !prev)

    const openCamera = useCallback(() => {
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
            } else if (response.errorMessage) {
            } else {
                if (response?.assets) {
                    const assetObj = response?.assets[0]
                    let imageObj = {
                        uri: assetObj.uri,
                        type: assetObj.type,
                        name: assetObj.fileName
                    }
                    setImage(imageObj)
                    toggleImagePickerPopup()
                } else {
                    Toast.show({
                        type: 'error',
                        text2: 'Error from camera please try again.',
                    });
                }
            }
        });
    }, []);

    const openLibrary = useCallback(() => {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
            } else if (response.errorMessage) {
            } else {
                const assetObj = response?.assets ? response?.assets[0] : null
                if (assetObj) {
                    let imageObj = {
                        uri: assetObj.uri,
                        type: assetObj.type,
                        name: assetObj.fileName
                    }
                    setImage(imageObj)
                    toggleImagePickerPopup()
                }
            }
        });
    }, []);

    return {
        image,
        openCamera,
        openLibrary,
        isImagePickerPopupVisible, setImagePickerPopupVisibility,
        toggleImagePickerPopup,
    };
};

export default useImagePicker;
