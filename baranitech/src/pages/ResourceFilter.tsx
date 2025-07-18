import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import { getLanguageType } from "../helper";
import { FilterFormStyled, LearnButtonStyled } from "./styles";

interface ResourceFilterProps {
    selectedLanguages: number | null;
    setSelectedLanguage: (val: number | null) => void;
}

const ResourceFilter = ({ selectedLanguages, setSelectedLanguage }: ResourceFilterProps) => {

    const hanldeChange = (_event: React.ChangeEvent<HTMLInputElement>, value: number) => {
        setSelectedLanguage(value);
    };
    const onClear = () => {
        setSelectedLanguage(null);
    };
    const FormControlLabels = getLanguageType.map(language => (
        <Grid sx={{ xs: 12 }} key={`language-${language.id}`}>
            <FormControlLabel control={<Checkbox sx={(theme) => ({
                color: theme.palette.indigo.dark, // fallback if pink isn't in theme
                '&.Mui-checked': {
                    color: theme.palette.indigo.dark,
                },
            })} onChange={(e) => hanldeChange(e, language.id)} />} checked={selectedLanguages === language.id} label={language.name} />
        </Grid>
    ))

    return (
        <Box marginBottom={2}>
            <FilterFormStyled>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid sx={{ xs: 12 }} alignItems="flex-start">
                        <Typography>Language</Typography>
                    </Grid>
                    {FormControlLabels}
                    <Grid sx={{ xs: 12 }}>
                        <LearnButtonStyled sx={{margin:2}} variant="contained" onClick={() => onClear()}>Clear</LearnButtonStyled>
                    </Grid>
                </Grid>
            </FilterFormStyled>
        </Box>
    )
};

export default ResourceFilter