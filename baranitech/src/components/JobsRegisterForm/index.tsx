import { yupResolver } from "@hookform/resolvers/yup";
import { Button, DialogActions, DialogContent, Grid, InputAdornment, styled, TextField, Typography } from "@mui/material";
import { Controller, Resolver, useForm } from "react-hook-form";
import { JobsRegisterFormSchema } from "../../validationSchema/schema";
import { InferType } from "yup";
import { useEffect } from "react";
import { useDialog } from "../../contexts/dialogContext";
import httpService from "../../api/httpService";
import { ApiResponse } from "../../types/common";
import theme from "../../theme";
import { useLoader } from "../../contexts/pageLoader";
import { useNavigate } from "react-router";


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
      job_id: id,
      min_salary: 0,
      max_salary: 0,
      experience: 0,
      skills: "",
    },
  });
  const { handleCancel } = useDialog()
  const { showLoader, hideLoader} = useLoader()
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) {
      handleCancel()
    }
    setValue("job_id", id)
  }, [id])


  const onSubmit = async (data: FormData) => {
    showLoader()
    try {
      const res = await httpService.post<ApiResponse>("/register-job-candidate", data);

      if (res.status) {
        navigate(`${import.meta.env.VITE_ROUTE_JOBS_URL}/thanks/1`)

        reset();
        handleCancel();
      } else {
        // optional: show a toast or alert here
      }
    } catch (err) {
      console.error(err);
    } finally {
      hideLoader()
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
                <TextField
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
                <TextField
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
                <TextField
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
            <Controller
              name="occupation"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Occupation"
                  type="text"
                  margin="normal"
                  {...field}
                  // {...register("occupation", { required: "Occupation required" })}
                  error={!!errors.occupation}
                  helperText={errors.occupation?.message}
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
                <TextField
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

          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="age"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Age *"
                  inputProps={{ min: 0 }}
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
                <TextField
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
                <TextField
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
                <TextField
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
                <TextField
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
              name="min_salary"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Minimum Salary Expectation *"
                  type="number"
                  margin="normal"
                  sx={{color: theme.palette.common.black}}
                  slotProps={{
                    input: {
                      startAdornment: (<InputAdornment position="start">
                        <Typography sx={{color:`${theme.palette.common.black} !important`}}>$</Typography>
                      </InputAdornment>),
                    },
                  }}
                  {...field}
                  error={Boolean(errors.min_salary)}
                  helperText={errors.min_salary?.message}
                  inputProps={{ min: 0 }}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="max_salary"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Maximum Salary Expectation *"
                  type="number"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.max_salary)}
                  helperText={errors.max_salary?.message}
                  inputProps={{ min: 0 }}
                  slotProps={{
                    input: {
                      startAdornment: (<InputAdornment position="start">
                        <Typography sx={{color:`${theme.palette.common.black} !important`}}>$</Typography>
                      </InputAdornment>),
                    },
                  }}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="experience"
              control={control}
              defaultValue={1}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Years of Expectation *"
                  type="number"
                  margin="normal"
                  {...field}
                  error={Boolean(errors.experience)}
                  helperText={errors.experience?.message}
                  inputProps={{ min: 0 }}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="skills"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Skills *"
                  type="text"
                  multiline
                  minRows={3}
                  margin="normal"
                  {...field}
                  error={Boolean(errors.skills)}
                  helperText={errors.skills?.message}
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