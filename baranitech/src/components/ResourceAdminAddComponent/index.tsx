import React, { useEffect, useState } from "react";
import {
  TextField,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdminResourceAddSchema } from "../../validationSchema/schema";
import { InferType } from "yup";
import { useYouTubeCategories } from "../../contexts/youtubeCategoryContext";
import {
  LearnButtonResStyled,
  StyledCont,
  StyledContainer,
  StyledForm,
  TitleResStyled,
} from "./styles";
import httpService from "../../api/httpService";
import { useErrorAlert } from "../../contexts/errorAlertContext";
import { useAxiosErrorHandler } from "../../hooks/useAxiosErrorHandler";
import { getLanguageType } from "../../helper";
import { useMatch, useNavigate, useParams } from "react-router";

type FormData = InferType<typeof AdminResourceAddSchema>;
interface YouTubeCategory {
  id: number;
  category: number;
  title: string;
}
interface ApiResponse {
  status: boolean;
  data: any;
}
const ResourceAdminAddComponent: React.FC = () => {
  const { categories } = useYouTubeCategories();
  const [relayTestingCategories, setRelayTestingCategories] = useState<
    YouTubeCategory[]
  >([]);
  const [equipmentTestingCategories, setEquipmentTestingCategories] = useState<
    YouTubeCategory[]
  >([]);
  const [success, setSuccess] = useState(false);
  const fullEditPath = `${import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL}/${
    import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_EDIT_URL
  }`;
  const ifItsEditPage = useMatch(fullEditPath);

  const params = useParams();
  const navigate = useNavigate();
  const { showError } = useErrorAlert();
  useAxiosErrorHandler(showError);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    trigger,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(AdminResourceAddSchema),
    mode: "onTouched",
    reValidateMode: "onBlur",
    defaultValues: {
      title: "",
      description: "",
      url: "",
      ctype: "",
      classification: "0",
      language: "0",
    },
  });

  const getParticularRecord = async () => {
    try {
      const res = await httpService.get<ApiResponse>(`/youtube/${params.pid}`);

      if (res.status) {
        setValue("title", res.data.title);
        setValue("description", res.data.description ?? "");
        setValue("language", res.data.language ?? "");
        setValue("classification", res.data.type.category);
        setTimeout(() => {
          setValue("ctype", res.data.type.title);
          trigger("ctype");
        }, 100);
        // setValue('ctype',  res.data.type.title)
        setValue("url", res.data.url);
        trigger("ctype");
        trigger();
      } else {
        // optional: show a toast or alert here
        navigate(import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL);
      }
    } catch (err) {
      console.error(err);
      navigate(import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL);
    }
  };

  useEffect(() => {
    if (ifItsEditPage) {
      // get particular api
      getParticularRecord();
    }
  }, [ifItsEditPage, categories]);

  const classification = watch("classification");

  useEffect(() => {
    setRelayTestingCategories(categories.filter((item) => item.category === 0));
    setEquipmentTestingCategories(
      categories.filter((item) => item.category === 1)
    );
  }, [categories]);

  useEffect(() => {
    setValue("ctype", ""); // Clear the type when classification changes
    trigger("ctype");
  }, [classification, setValue]);

  const onSubmit = async (data: FormData) => {
    const type: number =
      categories.find((item) => item.title === data.ctype)?.id ?? 0;
    const formData = new FormData();
    formData.append("title", data.title ?? "");
    formData.append("description", data.description ?? "");
    formData.append("type", type.toString());
    formData.append("url", data.url ?? "");
    formData.append("language", data.language ?? 0);

    try {
      const res = await httpService.post<ApiResponse>("/youtube", formData);

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
      categories.find((item) => item.title === data.ctype)?.id ?? 0;
    const formData = new FormData();
    formData.append("title", data.title ?? "");
    formData.append("description", data.description ?? "");
    formData.append("type", type.toString());
    formData.append("url", data.url ?? "");
    formData.append("language", data.language ?? 0);

    try {
      const res = await httpService.put<ApiResponse>(
        `/youtube/${params.pid}`,
        formData
      );

      if (res.status) {
        setSuccess(true);
        reset();
        navigate(import.meta.env.VITE_ROUTE_ADMIN_RESOURCE_URL);
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
          {ifItsEditPage ? "Edit Resource" : "Add Resource"}
        </TitleResStyled>
        <StyledCont>
          <StyledForm sx={{ mx: "auto", p: 0 }}>
            {success && (
              <Alert severity="success">Resource created successfully!</Alert>
            )}

            <FormControl fullWidth margin="normal">
              <InputLabel>Classification</InputLabel>
              <Controller
                name="classification"
                control={control}
                render={({ field }) => (
                  <Select label="Classification" {...field}>
                    <MenuItem value="0">Protection Relay Testing</MenuItem>
                    <MenuItem value="1">Equipment Testing</MenuItem>
                  </Select>
                )}
              />
            </FormControl>

            {/* Type */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Type</InputLabel>
              <Controller
                name="ctype"
                control={control}
                render={({ field }) => (
                  <Select label="Type" {...field}>
                    {(classification === "0"
                      ? relayTestingCategories
                      : equipmentTestingCategories
                    ).map((item) => (
                      <MenuItem key={item.id} value={item.title}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Language</InputLabel>
              <Controller
                name="language"
                control={control}
                render={({ field }) => (
                  <Select label="language" {...field}>
                    {getLanguageType.map((lang) => (
                      <MenuItem value={lang.id}>{lang.name}</MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </StyledForm>
          <StyledForm>
            {/* Title */}
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Resource Name"
                  fullWidth
                  margin="normal"
                  {...field}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />
            {/* URL */}
            <Controller
              name="url"
              control={control}
              render={({ field }) => (
                <TextField
                  label="YouTube URL"
                  fullWidth
                  {...field}
                  margin="normal"
                  error={!!errors.url}
                  helperText={errors.url?.message}
                />
              )}
            />

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
          </StyledForm>
        </StyledCont>
        <LearnButtonResStyled
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting && "Submitting..."}
          {!isSubmitting && ifItsEditPage && "Update"}
          {!isSubmitting && !ifItsEditPage && "Submit"}
        </LearnButtonResStyled>
      </Box>
    </StyledContainer>
  );
};

export default ResourceAdminAddComponent;
