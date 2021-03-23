import { createError } from '@inviqa/viper-react-hooks';

export const missingCartIdError = createError('Invalid Cart ID', 'Cart ID is not set');
