import { useState } from 'react';
import { useProjects, useAddProject, useUpdateProject, useDeleteProject } from '../../lib/store';
import { Project } from '../../data/projects';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Loader2, Plus, Edit2, Trash2, X } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

export default function ProjectsManager() {
  const { data: projects, isLoading, error } = useProjects();
  const addMutation = useAddProject();
  const updateMutation = useUpdateProject();
  const deleteMutation = useDeleteProject();
  const { toast } = useToast();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Partial<Project>>({
    id: '', title: '', client: '', location: '', date: '', machineryType: '',
    units: 0, description: '', challenge: '', solution: '', 
    advantages: [], tags: [], coverImage: '/placeholder.svg', photos: []
  });

  const [advantageInput, setAdvantageInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  const handleOpenForm = (project?: Project) => {
    if (project) {
      setEditingId(project.id);
      setFormData({ ...project });
    } else {
      setEditingId(null);
      setFormData({ 
        id: `proj-${Date.now()}`, title: '', client: '', location: '', date: new Date().getFullYear().toString(), 
        machineryType: '', units: 0, description: '', challenge: '', solution: '', 
        advantages: [], tags: [], coverImage: '/placeholder.svg', photos: []
      });
    }
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingId(null);
  };

  const addArrayItem = (field: 'advantages' | 'tags', input: string, setInput: (v: string) => void) => {
    if (input.trim()) {
      setFormData(prev => ({ ...prev, [field]: [...(prev[field] as string[] || []), input.trim()] }));
      setInput('');
    }
  };

  const removeArrayItem = (field: 'advantages' | 'tags', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[])?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateMutation.mutateAsync(formData as Project);
        toast({ title: 'Project updated successfully' });
      } else {
        await addMutation.mutateAsync(formData as Project);
        toast({ title: 'Project added successfully' });
      }
      handleCloseForm();
    } catch (err: any) {
      toast({ title: 'Error', description: err.message, variant: 'destructive' });
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteMutation.mutateAsync(id);
        toast({ title: 'Project deleted' });
      } catch (err: any) {
        toast({ title: 'Error deleting project', description: err.message, variant: 'destructive' });
      }
    }
  };

  if (isLoading) return <div className="flex justify-center p-10"><Loader2 className="h-8 w-8 animate-spin text-flame-orange" /></div>;
  if (error) return <div className="text-red-500">Error loading projects: {(error as any).message}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl">Projects (Case Studies)</h2>
        <Button onClick={() => handleOpenForm()} className="bg-gradient-flame text-white hover:scale-105 transition-transform border-0">
          <Plus className="h-4 w-4 mr-2" /> Add Project
        </Button>
      </div>

      {isFormOpen ? (
        <form onSubmit={handleSubmit} className="bg-muted/30 p-6 rounded-xl border border-border/50 mb-8 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{editingId ? 'Edit Project' : 'New Project'}</h3>
            <Button variant="ghost" size="icon" type="button" onClick={handleCloseForm}><X className="h-5 w-5" /></Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-1.5"><Label>Project ID</Label><Input value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})} disabled={!!editingId} required /></div>
            <div className="space-y-1.5"><Label>Title</Label><Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required /></div>
            <div className="space-y-1.5"><Label>Client</Label><Input value={formData.client} onChange={e => setFormData({...formData, client: e.target.value})} required /></div>
            <div className="space-y-1.5"><Label>Location</Label><Input value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} required /></div>
            <div className="space-y-1.5"><Label>Date / Year</Label><Input value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} required /></div>
            <div className="space-y-1.5"><Label>Machinery Type</Label><Input value={formData.machineryType} onChange={e => setFormData({...formData, machineryType: e.target.value})} required /></div>
            <div className="space-y-1.5"><Label>Units Installed</Label><Input type="number" value={formData.units} onChange={e => setFormData({...formData, units: parseInt(e.target.value) || 0})} required /></div>
            <div className="space-y-1.5"><Label>Cover Image</Label><Input value={formData.coverImage} onChange={e => setFormData({...formData, coverImage: e.target.value})} /></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="space-y-1.5"><Label>Summary Description</Label><Textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={3} required /></div>
            <div className="space-y-1.5"><Label>The Challenge</Label><Textarea value={formData.challenge} onChange={e => setFormData({...formData, challenge: e.target.value})} rows={3} required /></div>
            <div className="space-y-1.5"><Label>Our Solution</Label><Textarea value={formData.solution} onChange={e => setFormData({...formData, solution: e.target.value})} rows={3} required /></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tags (e.g. Mining, Heavy Duty)</Label>
              <div className="flex gap-2">
                <Input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => { if(e.key === 'Enter') { e.preventDefault(); addArrayItem('tags', tagInput, setTagInput); } }} />
                <Button type="button" variant="outline" onClick={() => addArrayItem('tags', tagInput, setTagInput)}>Add</Button>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {formData.tags?.map((t, i) => (
                  <span key={i} className="bg-background border px-2 py-1 rounded text-xs flex items-center">{t} <button type="button" onClick={() => removeArrayItem('tags', i)} className="ml-1 text-red-500"><X className="h-3 w-3"/></button></span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Key Advantages / Results</Label>
              <div className="flex gap-2">
                <Input value={advantageInput} onChange={e => setAdvantageInput(e.target.value)} onKeyDown={e => { if(e.key === 'Enter') { e.preventDefault(); addArrayItem('advantages', advantageInput, setAdvantageInput); } }} />
                <Button type="button" variant="outline" onClick={() => addArrayItem('advantages', advantageInput, setAdvantageInput)}>Add</Button>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                {formData.advantages?.map((a, i) => (
                  <div key={i} className="bg-background border px-2 py-1 rounded text-xs flex justify-between items-center">{a} <button type="button" onClick={() => removeArrayItem('advantages', i)} className="text-red-500"><X className="h-3 w-3"/></button></div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="outline" onClick={handleCloseForm}>Cancel</Button>
            <Button type="submit" className="bg-gradient-flame text-white border-0" disabled={addMutation.isPending || updateMutation.isPending}>
              {addMutation.isPending || updateMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              {editingId ? 'Save Changes' : 'Create Project'}
            </Button>
          </div>
        </form>
      ) : null}

      <div className="border border-border/50 rounded-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/50 border-b border-border/50">
            <tr>
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Client</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects?.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-muted-foreground">No projects found.</td></tr>
            ) : (
              projects?.map(p => (
                <tr key={p.id} className="border-b border-border/50 last:border-0 hover:bg-muted/20">
                  <td className="p-4 font-medium">{p.title}</td>
                  <td className="p-4">{p.client}</td>
                  <td className="p-4 text-muted-foreground">{p.date}</td>
                  <td className="p-4 text-right flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleOpenForm(p)}><Edit2 className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(p.id)} className="text-red-500 hover:text-red-600 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
