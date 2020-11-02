import { createError } from '~hooks/useErrorHandler';

export const missingCartIdError = createError('Invalid Cart ID', 'Cart ID is not set');
