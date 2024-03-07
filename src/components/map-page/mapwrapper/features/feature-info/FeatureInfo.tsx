import {FC} from "react";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import {Feature} from "ol";

type FeatureInfoProps = {
    selectedFeature: Feature | null,
    setSelectedFeature: (feature: Feature | null) => void
}
const FeatureInfo: FC<FeatureInfoProps> = ({ selectedFeature, setSelectedFeature }) => {
    if (!selectedFeature)
        return <></>

    return (
        <Dialog open={!!selectedFeature} onClose={() => setSelectedFeature(null)}>
            <DialogTitle>
                <Typography>Feature properties</Typography>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    { Object.entries(selectedFeature.getProperties()).filter(([k, _]) => k !== 'geometry').map(([k, v]) => <Typography key={k}>{v.toString()}</Typography>)}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setSelectedFeature(null)}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FeatureInfo