"use client";

import theme from "@/styles/theme";
import { Checkbox, Table, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

interface Account {
  id: number;
  name?: string;
  email: string;
  password: string;
  createdAt: Date;
}

const UsersTable = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch("/api/accounts");
        if (!response.ok) throw new Error("Falha ao receber contas.");

        const data: Account[] = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error("Erro ao buscar contas:", error);
      }
    };

    fetchAccounts();
  }, []);

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(accounts.length).fill(false)
  );
  const [allAccountsChecked, setAllAccountsChecked] = useState<boolean>(false);

  const handleCheckAll = (checked: boolean) => {
    setAllAccountsChecked(checked);
    setCheckedItems(new Array(accounts.length).fill(checked));
  };

  const handleCheck = (index: number, checked: boolean) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = checked;
    setCheckedItems(updatedCheckedItems);

    setAllAccountsChecked(updatedCheckedItems.every(Boolean));
  };

  const rows = accounts.map((account, index) => (
    <Table.Tr key={account.id}>
      <Table.Td>
        <Checkbox
          checked={checkedItems[index]}
          onChange={(event) =>
            handleCheck(index, event.currentTarget.checked)
          }
          color={theme.colors.pink}
          radius={2}
          styles={() => ({
            input: {
              backgroundColor: "transparent",
              borderWidth: "2px",
            },
          })}
        />
      </Table.Td>
      <Table.Td>
        <Title order={5} c={theme.colors.purple}>
          {account.name || "Usuário"}
        </Title>
        <Text c={theme.colors.gray}>{account.email}</Text>
      </Table.Td>
      <Table.Td>{new Date(account.createdAt).toLocaleDateString()}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      {/* Cabeçalho da tabela */}
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Checkbox
              checked={allAccountsChecked}
              onChange={(event) =>
                handleCheckAll(event.currentTarget.checked)
              }
              color={theme.colors.pink}
              radius={2}
              styles={() => ({
                input: {
                  backgroundColor: "transparent",
                  borderWidth: "2px",
                },
              })}
            />
          </Table.Th>
          <Table.Th>
            <Title tt="uppercase" order={6} c={theme.colors.gray600}>
              Contas
            </Title>
          </Table.Th>
          <Table.Th>
            <Title tt="uppercase" order={6} c={theme.colors.gray600}>
              Data de Cadastro
            </Title>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>

      {/* Conteúdo */}
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default UsersTable;
