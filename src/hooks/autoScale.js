import { readAndCompressImage } from 'browser-image-resizer';


export default function useAutoScale({
    config,
    UpdateFile 
  }) {
    const enqueueAutoScale = (id,file) => {
         
        return new Promise((resolve, reject) => {
             
            let OriginalFileName= file.name;
            let originalType=file.type;
            
            config.autoScaleConfig.mimeType=file.type
            readAndCompressImage(file, config.autoScaleConfig)
            .then(resizedImage => {
                let NewFileData =  new File([resizedImage],OriginalFileName,{type: originalType, lastModified: Date.now()})
                // resizedImage.name = OriginalFileName;
                // resizedImage.type = originalType;
                UpdateFile(id,NewFileData);
                            
                resolve(NewFileData);
            });
            
            });
        
    };
    return { enqueueAutoScale };
}