import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import moment from "moment";
import { Link } from "react-router-dom";
import Text from "../../../Components/Text";
import useAuth from "../../../Contexts/useAuth";
import styles from "./styles.module.scss";

export default function Dados() {
  const { dados, isLoading } = useAuth();

  return (
    <Box className={styles.container}>
      {isLoading ? (
        <>
          <Skeleton variant="text" width={200} height={20} />
          <Skeleton variant="text" width={200} height={20} />
          <Skeleton variant="text" width={200} height={20} />
          <Skeleton variant="text" width={200} height={20} />
          <Skeleton variant="text" width={200} height={20} />
          <Skeleton variant="text" width={200} height={20} />
        </>
      ) : (
        <>
          {dados.map((item, index) => {
            return (
              <Box key={`${index} ${item}`} className={styles.infos}>
                <Text fontWeight={700} fontSize={14}>
                  {item.info}
                </Text>

                <Text fontSize={14}>
                  {item.type === "date"
                    ? moment(item.content).format("DD/MM/YYYY")
                    : item.content}
                </Text>
              </Box>
            );
          })}
        </>
      )}

      <Link to="/espera">
        <Box>
          <EditOutlinedIcon />
        </Box>
      </Link>
    </Box>
  );
}
