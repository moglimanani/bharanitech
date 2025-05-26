export interface JobCategoryType {
    id: number;
    title: string;
    created_at: string | null;
    updated_at: string | null;
  }
  
  export interface JobsType {
    id: number;
    type: number;
    total_vacancy: number;
    city: string;
    state: string;
    country: string;
    company: string;
    description: string;
    title: string;
    created_at: string;
    updated_at: string;
    category: JobCategoryType;
  }

  export interface allJobsType {
    allJobs: JobsType[];
    loading: boolean;
    error: string | null;
    refresh: () => void;
  }

  export interface ApiResponse {
    status: boolean;
    data: any;
  }