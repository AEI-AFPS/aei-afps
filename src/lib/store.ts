import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from './supabase';
import { Product, Project } from '../types';

// ── Products ────────────────────────────────────────────────────────────────

export const useProducts = () => {
  return useQuery({
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
          features: ['Keeps wheel hubs clean', 'Protects from dust and debris', 'Engineered for heavy-duty operation']
        },
        {
          id: 'jumbo-wheel-chock',
          title: 'Jumbo Wheel Chock',
          description: 'Oversized chocks engineered for heavy mining vehicles — providing reliable, stable parking on uneven terrain.',
          category: 'advancements',
          imageUrl: 'https://placehold.co/600x400/png?text=Jumbo+Wheel+Chock',
          features: ['Oversized for heavy mining vehicles', 'Reliable and stable parking', 'Effective on uneven terrain']
        }
      ];

      // Only append if they don't already exist in the DB
      const mergedProducts = [...dbProducts];
      staticProducts.forEach(sp => {
        if (!mergedProducts.some(p => p.id === sp.id)) {
          mergedProducts.push(sp);
        }
      });

      return mergedProducts;
    },
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product: Product) => {
      const { error } = await supabase.from('products').insert({
        id: product.id,
        title: product.title,
        description: product.description,
        category: product.category,
        image_url: product.imageUrl,
        features: product.features || [],
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product: Product) => {
      const { error } = await supabase.from('products').update({
        title: product.title,
        description: product.description,
        category: product.category,
        image_url: product.imageUrl,
        features: product.features || [],
      }).eq('id', product.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

// ── Projects ────────────────────────────────────────────────────────────────

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) throw error;
      
      return (data || []).map((p: any) => ({
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
    },
  });
};

export const useAddProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (project: Project) => {
      const { error } = await supabase.from('projects').insert({
        id: project.id,
        title: project.title,
        client: project.client,
        location: project.location,
        date: project.date,
        machinery_type: project.machineryType,
        units: project.units,
        description: project.description,
        challenge: project.challenge,
        solution: project.solution,
        advantages: project.advantages || [],
        tags: project.tags || [],
        cover_image: project.coverImage,
        photos: project.photos || [],
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (project: Project) => {
      const { error } = await supabase.from('projects').update({
        title: project.title,
        client: project.client,
        location: project.location,
        date: project.date,
        machinery_type: project.machineryType,
        units: project.units,
        description: project.description,
        challenge: project.challenge,
        solution: project.solution,
        advantages: project.advantages || [],
        tags: project.tags || [],
        cover_image: project.coverImage,
        photos: project.photos || [],
      }).eq('id', project.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};
