import { useState, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/button';
import { Loader2, UploadCloud, X, Image as ImageIcon } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

interface ImageUploadProps {
  value?: string;
  onChange?: (url: string) => void;
  onUploadMultiple?: (urls: string[]) => void;
  onRemove?: () => void;
  folder?: string;
  className?: string;
  multiple?: boolean;
}

export function ImageUpload({ value, onChange, onUploadMultiple, onRemove, folder = 'products', className, multiple = false }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFiles = async (files: FileList) => {
    if (files.length === 0) return;

    try {
      setIsUploading(true);
      
      if (multiple && onUploadMultiple) {
        const uploadedUrls: string[] = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const fileExt = file.name.split('.').pop();
          const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
          const filePath = `${folder}/${fileName}`;

          const { error: uploadError } = await supabase.storage.from('media').upload(filePath, file);
          if (uploadError) throw uploadError;

          const { data: { publicUrl } } = supabase.storage.from('media').getPublicUrl(filePath);
          uploadedUrls.push(publicUrl);
        }
        onUploadMultiple(uploadedUrls);
      } else {
        const file = files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
        const filePath = `${folder}/${fileName}`;

        const { error: uploadError } = await supabase.storage.from('media').upload(filePath, file);
        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage.from('media').getPublicUrl(filePath);
        if (onChange) onChange(publicUrl);
      }
    } catch (error: any) {
      toast({ title: 'Upload failed', description: error.message, variant: 'destructive' });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div className={`w-full ${className || ''}`}>
      {value && !multiple ? (
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border group bg-muted/20 flex items-center justify-center">
          <img src={value} alt="Uploaded preview" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
            >
              Replace
            </Button>
            {onRemove && (
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={onRemove}
                disabled={isUploading}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div 
          onClick={() => !isUploading && fileInputRef.current?.click()}
          className="w-full h-48 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 text-muted-foreground hover:bg-muted/30 hover:border-flame-orange/50 transition-colors cursor-pointer"
        >
          {isUploading ? (
            <>
              <Loader2 className="h-8 w-8 animate-spin text-flame-orange" />
              <span className="text-sm">Uploading...</span>
            </>
          ) : (
            <>
              <UploadCloud className="h-8 w-8 text-muted-foreground/70" />
              <span className="text-sm font-medium">Click to upload image{multiple ? 's' : ''}</span>
              <span className="text-xs text-muted-foreground/70">JPG, PNG, WebP up to 5MB</span>
            </>
          )}
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        accept="image/png, image/jpeg, image/webp"
        multiple={multiple}
        className="hidden"
      />
    </div>
  );
}
