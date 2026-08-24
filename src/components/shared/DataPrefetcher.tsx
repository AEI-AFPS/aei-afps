import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { Product, Project } from '../../types';

/** Preloads a list of image URLs into the browser's memory cache */
function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    if (!url) return;
    const img = new Image();
    img.src = url;
  });
}

/**
 * Silently fetches products + projects data on mount and preloads all their images.
 * This component renders nothing — it just warms up the React Query cache and the
 * browser image cache so navigating to Products/Projects feels instant.
 */
export function DataPrefetcher() {
  const queryClient = useQueryClient();

  useEffect(() => {
    // Prefetch products
    queryClient.prefetchQuery({
      queryKey: ['products'],
      queryFn: async () => {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;

        const dbProducts = (data || []).map((p: any) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          category: p.category,
          imageUrl: p.image_url,
          features: p.features,
        })) as Product[];

        const staticProducts: Product[] = [
          {
            id: 'dustfree-wheel-cap',
            title: 'Dustfree Cap Type Wheel',
            description: 'Engineered to keep wheel hubs clean and fully protected from dust and debris during heavy-duty operation.',
            category: 'advancements',
            imageUrl: 'https://placehold.co/600x400/png?text=Dustfree+Cap',
            features: ['Keeps wheel hubs clean', 'Protects from dust and debris', 'Engineered for heavy-duty operation'],
          },
          {
            id: 'jumbo-wheel-chock',
            title: 'Jumbo Wheel Chock',
            description: 'Oversized chocks engineered for heavy mining vehicles.',
            category: 'advancements',
            imageUrl: 'https://placehold.co/600x400/png?text=Jumbo+Wheel+Chock',
            features: ['Oversized for heavy mining vehicles', 'Reliable and stable parking', 'Effective on uneven terrain'],
          },
        ];

        const mergedProducts = [...dbProducts];
        staticProducts.forEach((sp) => {
          if (!mergedProducts.some((p) => p.id === sp.id)) mergedProducts.push(sp);
        });

        // Preload all product images
        preloadImages(mergedProducts.map((p) => p.imageUrl).filter(Boolean));

        return mergedProducts;
      },
      staleTime: 5 * 60 * 1000, // treat as fresh for 5 minutes
    });

    // Prefetch projects
    queryClient.prefetchQuery({
      queryKey: ['projects'],
      queryFn: async () => {
        const { data, error } = await supabase.from('projects').select('*');
        if (error) throw error;

        const projects = (data || []).map((p: any) => ({
          id: p.id,
          title: p.title,
          client: p.client,
          location: p.location,
          date: p.date,
          machineryType: p.machinery_type,
          units: p.units,
          description: p.description,
          challenge: p.challenge,
          solution: p.solution,
          advantages: p.advantages || [],
          tags: p.tags || [],
          coverImage: p.cover_image,
          photos: p.photos || [],
        })) as Project[];

        // Preload all cover images + gallery photos
        const imageUrls: string[] = [];
        projects.forEach((p) => {
          if (p.coverImage) imageUrls.push(p.coverImage);
          if (Array.isArray(p.photos)) imageUrls.push(...p.photos);
        });
        preloadImages(imageUrls);

        return projects;
      },
      staleTime: 5 * 60 * 1000,
    });
  }, [queryClient]);

  return null; // renders nothing
}
