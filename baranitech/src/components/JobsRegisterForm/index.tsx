import { yupResolver } from "@hookform/resolvers/yup";
import { Button, DialogActions, DialogContent, Grid, styled, TextField } from "@mui/material";
import { Controller, Resolver, useForm } from "react-hook-form";
import { JobsRegisterFormSchema } from "../../validationSchema/schema";
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

type FormData = InferType<typeof JobsRegisterFormSchema>;


export const JobsRegisterForm = ({ id }: { id: number }) => {

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    trigger,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(JobsRegisterFormSchema) as Resolver<FormData>,
    mode: "onTouched",
    reValidateMode: "onBlur",
    defaultValues: {
      first_name: "",
      last_name: "",
      occupation: "",
      age: 18,
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      email: "",
      job_id: id
    },
  });
  const { handleCancel } = useDialog()
  useEffect(() => {
    if (!id) {
      handleCancel()
    }
    setValue("job_id", id)
  }, [id])


  const onSubmit = async (data: FormData) => {

    try {
      const res = await httpService.post<ApiResponse>("/register-job-candidate", data);

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
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledField
                  fullWidth
                  label="First name *"
                  type="text"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.first_name)}
                  helperText={errors.first_name?.message}
                />
              )}
            />

          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledField
                  fullWidth
                  label="Last name *"
                  type="text"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.last_name)}
                  helperText={errors.last_name?.message}
                />
              )}
            />

          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledField
                  fullWidth
                  label="Email *"
                  type="email"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StyledField
              fullWidth label="Occupation"
              {...register("occupation", { required: "Occupation required" })}
              error={!!errors.occupation}
              helperText={errors.occupation?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="age"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <StyledField
                  fullWidth
                  label="Age *"
                  type="number"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.age)}
                  helperText={errors.age?.message}
                />
              )}
            />

          </Grid>
          <Grid size={{ xs: 12 }}>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledField
                  fullWidth
                  label="Address *"
                  type="text"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.address)}
                  helperText={errors.address?.message}
                />
              )}
            />

          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledField
                  fullWidth
                  label="City *"
                  type="text"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.city)}
                  helperText={errors.city?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="state"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledField
                  fullWidth
                  label="State *"
                  type="text"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.state)}
                  helperText={errors.state?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledField
                  fullWidth
                  label="Country *"
                  type="text"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.country)}
                  helperText={errors.country?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledField
                  fullWidth
                  label="Phone *"
                  type="text"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone?.message}
                />
              )}
            />
          </Grid>

        </Grid>
      </DialogContent>
      <DialogActions>
        <LearnButtonStyled onClick={() => handleCancel()}>Cancel</LearnButtonStyled>
        <LearnButtonStyled type="submit" variant="contained" disabled={!isValid || isSubmitting}>Register</LearnButtonStyled  >
      </DialogActions>
    </form>
  )
}