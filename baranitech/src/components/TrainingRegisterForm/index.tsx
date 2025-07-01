import { yupResolver } from "@hookform/resolvers/yup";
import { Button, DialogActions, DialogContent, Grid, styled, TextField } from "@mui/material";
import { Resolver, useForm } from "react-hook-form";
import { TrainingRegisterFormSchema } from "../../validationSchema/schema";
import { InferType } from "yup";
import { useEffect } from "react";
import { useDialog } from "../../contexts/dialogContext";
import httpService from "../../api/httpService";
import { ApiResponse } from "../../types/common";

const StyledField = styled(TextField)`
  margin-bottom: 16px !important;
`;

export const LearnButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: ".88rem",
  color: theme.palette.appBarColour.light,
  background: theme.palette.appBarColour.main,
  borderRadius: "20px",
  margin: "10px 0 20px",
  padding: "10px 20px",
}));

type FormData = InferType<typeof TrainingRegisterFormSchema>;


export const TrainingRegisterForm = ({ id }: { id: number }) => {

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    trigger,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(TrainingRegisterFormSchema) as Resolver<FormData>,
    mode: "onTouched",
    reValidateMode: "onBlur",
    defaultValues: {
      user_name: "",
      user_occupation: "",
      user_age: 0,
      user_phone: "",
      user_address: "",
      user_city: "",
      user_state: "",
      user_country: "",
      user_email: "",
      requirements: "",
      training_id: id
    },
  });
  const { handleCancel } = useDialog()
  useEffect(() => {
    if (!id) {
      handleCancel()
    }
    setValue("training_id", id)
  }, [id])


  const onSubmit = async (data: FormData) => {

      try {
        const res = await httpService.post<ApiResponse>("/register-training", data);

        if (res.status) {
          // setSuccess(true);
          
          reset();
          handleCancel();
        } else {
          // optional: show a toast or alert here
        }
      } catch (err) {
        console.error(err);
      }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Name"
              {...register("user_name", { required: "Name is required" })}
              error={!!errors.user_name}
              helperText={errors.user_name?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Email"
              type="email"
              {...register("user_email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email"
                }
              })}
              error={!!errors.user_email}
              helperText={errors.user_email?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Occupation"
              {...register("user_occupation", { required: "Occupation required" })}
              error={!!errors.user_occupation}
              helperText={errors.user_occupation?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Phone"
              {...register("user_phone", { required: "Phone required" })}
              error={!!errors.user_phone}
              helperText={errors.user_phone?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Age" type="number"
              {...register("user_age", { required: "Age is required" })}
              error={!!errors.user_age}
              helperText={errors.user_age?.message}
            />
          </Grid>
          {/* <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Training ID" type="number"
              {...register("training_id", { required: "Training ID required" })}
              error={!!errors.training_id}
              helperText={errors.training_id?.message}
            />
          </Grid> */}
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Address"
              {...register("user_address", { required: "Address required" })}
              error={!!errors.user_address}
              helperText={errors.user_address?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="City"
              {...register("user_city", { required: "City required" })}
              error={!!errors.user_city}
              helperText={errors.user_city?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="State"
              {...register("user_state", { required: "State required" })}
              error={!!errors.user_state}
              helperText={errors.user_state?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Country"
              {...register("user_country", { required: "Country required" })}
              error={!!errors.user_country}
              helperText={errors.user_country?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Training Requirements"
              multiline minRows={3}
              {...register("requirements", { required: "This field is required" })}
              error={!!errors.requirements}
              helperText={errors.requirements?.message}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
          <LearnButtonStyled onClick={()=>handleCancel()}>Cancel</LearnButtonStyled>
          <LearnButtonStyled type="submit" variant="contained" disabled={!isValid || isSubmitting}>Register</LearnButtonStyled  >
        </DialogActions>
    </form>
  )
}