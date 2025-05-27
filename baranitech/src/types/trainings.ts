export interface TrainingCategoryType {
    id: number;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
  }

export interface TrainingType {
    id: number;
    title: string;
    description: string;
    classification: "0" | "1"; // 0 => Direct, 1 => Online
    startdate: string;
    enddate: string;
    city: string;
    state: string;
    country: string;
    total_hours: number;
    total_price: number;
    location: string;
    table_of_contents: string;
    type: string;
    category: TrainingCategoryType;
    created_at: string;
  }

  export interface allTrainingsType {
    allTrainings: TrainingType[];
    loading: boolean;
    error: string | null;
    refresh: () => void;
  }
