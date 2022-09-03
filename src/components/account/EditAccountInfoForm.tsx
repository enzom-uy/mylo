import { BiEdit } from 'react-icons/bi';
import ModalContainer from '../ModalContainer';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast,
  ToastId,
  Button,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  EditAccountInfoInputs,
  editAccountInfoSchema,
} from '@/schemas/formSchema';
import { trpc } from '@/utils/trpc';
import { ChakraForm } from '../Form/ChakraForm';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const EditAccountInfoForm: React.FC<{
  email: string | undefined;
  name: string | undefined;
}> = ({ email, name }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EditAccountInfoInputs>({
    mode: 'onTouched',
    resolver: zodResolver(editAccountInfoSchema),
  });
  const toast = useToast();
  const toastIdRef = useRef<ToastId | undefined>();
  const router = useRouter();

  const trpcEditUser = trpc.useMutation('user.edit');

  const onSubmit = async (data: EditAccountInfoInputs) => {
    const name = data.name;
    toastIdRef.current = toast({
      title: 'Editando información del usuario...',
      description: 'Un momento.',
      status: 'loading',
      position: 'top',
      isClosable: true,
    });

    const { newUser } = await trpcEditUser.mutateAsync({
      email: email!,
      name: name,
    });

    if (newUser) {
      reset();
      toast.close(toastIdRef.current);
      toast({
        title: `Se cambió tu nombre a: ${data.name}`,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      router.reload();
    } else {
      toast.close(toastIdRef.current);
      toast({
        title: `Ha ocurrido un error.`,
        description: 'Por favor, intente nuevamente.',
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  return (
    <ModalContainer
      title="Editar información"
      icon={<BiEdit fontSize="1.4rem" />}
      buttonText="Editar"
    >
      <ChakraForm
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDir="column"
        gap={2}
        mb={3}
      >
        <FormControl isInvalid={!!errors?.name?.message} isRequired>
          <Text fontSize="1.2rem" mb={3}>
            Nombre actual: {name}
          </Text>
          <FormLabel htmlFor="name">Nuevo nombre</FormLabel>
          <Input
            type="text"
            id="name"
            placeholder="Hampus"
            {...register('name')}
          />
          <FormErrorMessage>
            {errors?.name && errors?.name?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          bgColor="primary"
          _hover={{ bgColor: 'primary-light' }}
          isLoading={isSubmitting}
          color="white"
        >
          Actualizar
        </Button>
      </ChakraForm>
    </ModalContainer>
  );
};

export default EditAccountInfoForm;
