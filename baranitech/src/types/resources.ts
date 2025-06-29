interface ResourceCategoryType {
  id: number;
  category: number;
  title: string;
}

export interface ResourceType {
  id: number;
  category: ResourceCategoryType;
  title: string;
  url: string;
  description: string;
  created_at: string;
  type: number;
  language: string;
}

export interface allResourcesType {
  allResources: ResourceType[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}
