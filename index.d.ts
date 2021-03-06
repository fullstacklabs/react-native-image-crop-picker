declare module "react-native-image-crop-picker" {
    export interface Options {
        cropping?: boolean;
        width?: number;
        height?: number;
        multiple?: boolean;
        path?: string;
        horizontalTransition?: boolean;
        includeBase64?: boolean;
        includeExif?: boolean;
        cropperTintColor?: string;
        cropperCircleOverlay?: boolean;
        maxFiles?: number;
        waitAnimationEnd?: boolean;
        smartAlbums?: string[];
        useFrontCamera?: boolean;
        compressVideoPreset?: string;
        compressImageMaxWidth?: number;
        compressImageMaxHeight?: number;
        compressImageQuality?: number;
        loadingLabelText?: string;
        mediaType?: string;
        showsSelectedCount?: boolean;
        showCropGuidelines?: boolean;
        hideBottomControls?: boolean;
        enableRotationGesture?: boolean;
    }

    export interface Image {
        path: string;
        size: number;
        data: null | string;
        width: number;
        height: number;
        mime: string;
        exif: null | object;
    }

    export function openPicker(options: Options): Promise<Image | Image[]>;
    export function openCamera(options: Options): Promise<Image | Image[]>;
    export function openCropper(options: Options): Promise<Image>;
    export function clean(): Promise<void>;
    export function cleanSingle(path: string): Promise<void>;

    export default {
        openPicker,
        openCamera,
        openCropper,
        clean,
        cleanSingle
    }
}
