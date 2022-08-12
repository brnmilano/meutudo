import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import moment from "moment";
import { useState } from "react";
import Text from "../../../Components/Text";
import styles from "./styles.module.scss";

export default function Dados() {
  const [isLoading, setIsLoading] = useState(true);
  const [dados, setDados] = useState([]);

  setTimeout(() => {
    setDados([
      {
        info: "Nome:",
        content: "Bruno Milano",
        type: "string",
      },
      {
        info: "CPF:",
        content: "000.000.000-00",
        type: "string",
      },
      {
        info: "Data de nascimento:",
        content: "1996-07-26",
        type: "date",
      },
      {
        info: "RG:",
        content: "0.000.000",
        type: "string",
      },
      {
        info: "Email:",
        content: "brn.milano@gmail.com",
        type: "string",
      },
      {
        info: "Telefone:",
        content: "(61) 9 8342-6022",
        type: "string",
      },
    ]);
    setIsLoading(false);
  }, 1500);

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
              <Box className={styles.infos}>
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

      <a href="/espera" rel="noopener noreferrer">
        <Box>
          <EditOutlinedIcon />
        </Box>
      </a>
    </Box>
  );
}
