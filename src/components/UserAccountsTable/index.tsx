"use client";
import theme from "@/styles/theme";
import {
  ActionIcon,
  Button,
  Center,
  Checkbox,
  Flex,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { ImBin } from "react-icons/im";
import { useState } from "react";
import { removeAccount, removeAllAccounts } from "@/app/api/removeAccounts";

interface UserAccountsTableProps {
  accounts?: {
    name: string;
    id: string;
    userId: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

const UserAccountsTable = ({ accounts = [] }: UserAccountsTableProps) => {
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const allChecked =
    accounts.length > 0 && selectedAccounts.length === accounts.length;
  const someChecked =
    selectedAccounts.length > 0 && selectedAccounts.length < accounts.length;

  // Lógica do checkbox principal
  const handleSelectAll = () => {
    if (allChecked) {
      setSelectedAccounts([]);
    } else {
      setSelectedAccounts(accounts.map((account) => account.id)); // Seleciona todos
    }
  };

  // Lógica dos checkboxes individuais
  const handleSelect = (id: string) => {
    setSelectedAccounts((prevState) =>
      prevState.includes(id)
        ? prevState.filter((selectedId) => selectedId !== id)
        : [...prevState, id]
    );
  };

  // Função de remoção da conta selecionada
  const handleRemoveOneAccount = (email: string) => {
    removeAccount({ email });
    console.log(`Conta com email ${email} removida com sucesso.`);
  };

  // Função de remoção de todas as contas
  const handleRemoveAllAccounts = async () => {
    if (selectedAccounts.length === 0) {
      console.warn("Nenhuma conta selecionada para remoção.");
      return;
    }

    const accountsToDelete = accounts.filter((account) =>
      selectedAccounts.includes(account.id)
    );

    await removeAllAccounts(accountsToDelete);
    setSelectedAccounts([]);
  };

  return (
    <Stack justify="space-between" h="100%">
      {accounts.length === 0 ? (
        <Center h={400}>
          <Text c={theme.colors.grayTwo}>Nenhuma conta relacionada</Text>
        </Center>
      ) : (
        <Table>
          {/* Cabeçalho da tabela */}
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Checkbox
                  color={theme.colors.pink}
                  radius={2}
                  checked={allChecked}
                  indeterminate={someChecked}
                  onChange={handleSelectAll}
                  styles={() => ({
                    input: {
                      backgroundColor: "transparent",
                      border: "2px solid #555",
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
              <Table.Th>
                <Title opacity={0}>Bin</Title>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          {/* Conteúdo */}
          <Table.Tbody>
            {accounts.map((account) => {
              const isChecked = selectedAccounts.includes(account.id);

              return (
                <Table.Tr key={account.id}>
                  <Table.Td>
                    <Checkbox
                      color={theme.colors.pink}
                      radius={2}
                      checked={isChecked}
                      onChange={() => handleSelect(account.id)}
                      styles={() => ({
                        input: {
                          backgroundColor: "transparent",
                          border: "2px solid #555",
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

                  <Table.Td>
                    {new Date(account.createdAt).toLocaleDateString()}
                  </Table.Td>

                  <Table.Td>
                    {isChecked && (
                      <ActionIcon
                        variant="transparent"
                        c={theme.colors.grayTwo}
                        onClick={() => handleRemoveOneAccount(account.email)}
                      >
                        <ImBin />
                      </ActionIcon>
                    )}
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      )}

      {allChecked && (
        <Flex bottom={0}>
          <Button bg={theme.colors.gray600} onClick={handleRemoveAllAccounts}>
            Apagar Contas
          </Button>
        </Flex>
      )}
    </Stack>
  );
};

export default UserAccountsTable;
