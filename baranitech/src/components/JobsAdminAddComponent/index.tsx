import React, { useState, useEffect } from "react";
import {
  TextField,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Grid,
} from "@mui/material";
import { Controller, Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdminJobAddSchema } from "../../validationSchema/schema";
import { InferType } from "yup";
import {
  LearnButtonResStyled,
  StyledContainer,
  TitleResStyled,
} from "./styles";
import httpService from "../../api/httpService";
import { useErrorAlert } from "../../contexts/errorAlertContext";
import { useAxiosErrorHandler } from "../../hooks/useAxiosErrorHandler";
import { useJobCategories } from "../../contexts/jobCategoryContext";
import { useMatch, useNavigate, useParams } from "react-router";

type FormData = InferType<typeof AdminJobAddSchema>;

interface ApiResponse {
  status?: boolean;
  success?: boolean;
  data: any;
}
const JobsAdminAddComponent: React.FC = () => {
  const { categories } = useJobCategories();
  const [success, setSuccess] = useState(false);

  const { showError } = useErrorAlert();
  const fullEditPath = `${import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL}/${import.meta.env.VITE_ROUTE_ADMIN_JOBS_EDIT_URL
    }`;
  const ifItsEditPage = useMatch(fullEditPath);
  const params = useParams();
  const navigate = useNavigate();

  useAxiosErrorHandler(showError);

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    trigger,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(AdminJobAddSchema) as Resolver<FormData>,
    mode: "onTouched",
    reValidateMode: "onBlur",
    defaultValues: {
      title: "",
      total_vacancy: 0,
      city: "",
      state: "",
      country: "",
      company: "",
      description: "",
      type: categories[0]?.title,
    },
  });

  const getParticularRecord = async () => {
    try {
      const res = await httpService.get<ApiResponse>(`/jobs/${params.pid}`);

      if (res.success) {
        setValue("title", res.data.title);
        setValue("total_vacancy", res.data.total_vacancy);
        setValue("description", res.data.description);
        setTimeout(() => {
          const type = res.data.type;
          setValue(
            "type",
            categories.find((item) => item.id === type)?.title ?? ""
          );
          trigger("type");
        }, 10);
        setValue("city", res.data.city);
        setValue("state", res.data.state);
        setValue("country", res.data.country);
        setValue("company", res.data.company);
        trigger();
      } else {
        // optional: show a toast or alert here
        navigate(import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL);
      }
    } catch (err) {
      console.error(err);
      navigate(import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL);
    }
  };
  useEffect(() => {
    if (ifItsEditPage) {
      // get particular api
      getParticularRecord();
    }
  }, [ifItsEditPage]);

  const onSubmit = async (data: FormData) => {
    const type: number =
      categories.find((item) => item.title === data.type)?.id ?? 0;
    const formData = new FormData();
    formData.append("title", data.title ?? "");
    formData.append("total_vacancy", data.total_vacancy.toString());
    formData.append("description", data.description ?? "");
    formData.append("type", type.toString());
    formData.append("city", data.city ?? "");
    formData.append("state", data.state ?? "");
    formData.append("country", data.country ?? "");
    formData.append("company", data.company ?? "");

    try {
      const res = await httpService.post<ApiResponse>("/jobs", formData);

      if (res.status) {
        setSuccess(true);
        reset();
      } else {
        // optional: show a toast or alert here
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleUpdate = async (data: FormData) => {
    const type: number =
      categories.find((item) => item.title === data.type)?.id ?? 0;
    const formData = new FormData();
    formData.append("title", data.title ?? "");
    formData.append("total_vacancy", data.total_vacancy.toString());
    formData.append("description", data.description ?? "");
    formData.append("type", type.toString());
    formData.append("city", data.city ?? "");
    formData.append("state", data.state ?? "");
    formData.append("country", data.country ?? "");
    formData.append("company", data.company ?? "");

    try {
      const res = await httpService.put<ApiResponse>(
        `/jobs/${params.pid}`,
        formData
      );

      if (res.status) {
        setSuccess(true);
        reset();
        navigate(import.meta.env.VITE_ROUTE_ADMIN_JOBS_URL);
      } else {
        // optional: show a toast or alert here
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledContainer maxWidth="xl">
      <Box
        component="form"
        onSubmit={handleSubmit(ifItsEditPage ? handleUpdate : onSubmit)}
      >
        <TitleResStyled variant="h4" gutterBottom>
          {ifItsEditPage ? "Edit Job" : "Add Job"}
        </TitleResStyled>
        {success && (
          <Alert severity="success">Job created successfully!</Alert>
        )}
        <Grid container spacing={{ xs: 1, sm: 2 }}>
          <Grid size={{ xs: 12, sm: 6 }} >

            {/* Title */}
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Job Title"
                  fullWidth
                  margin="normal"
                  {...field}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />
          </Grid>

         
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select label="Type" {...field}>
                    {categories.map((item) => (
                      <MenuItem key={item.id} value={item.title}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  label="City"
                  fullWidth
                  {...field}
                  margin="normal"
                  error={!!errors.city}
                  helperText={errors.city?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  label="State"
                  fullWidth
                  {...field}
                  margin="normal"
                  error={!!errors.state}
                  helperText={errors.state?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Country"
                  fullWidth
                  {...field}
                  margin="normal"
                  error={!!errors.country}
                  helperText={errors.country?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Company"
                  fullWidth
                  {...field}
                  margin="normal"
                  error={!!errors.company}
                  helperText={errors.company?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Controller
              name="total_vacancy"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Vacancies"
                  fullWidth
                  margin="normal"
                  {...field}
                  error={!!errors.total_vacancy}
                  helperText={errors.total_vacancy?.message}
                />
              )}
            />
          </Grid>
         
          <Grid size={{ xs: 12 }}>

            {/* Description */}
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  {...field}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <LearnButtonResStyled
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting || !isValid}
            >
              {ifItsEditPage ? "Update" : "Submit"}
            </LearnButtonResStyled>
          </Grid>
        </Grid>
      </Box>
    </StyledContainer>
  );
};

export default JobsAdminAddComponent;
