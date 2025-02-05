import { logger } from 'log';
import { removeUnsafeRequestHeaders, removeUnsafeResponseHeaders } from './http-helpers.js';
import { utility } from './utility.js';

export function responseProvider(request) {
  logger.log('log');
  utility();
  return createResponse(200, removeUnsafeResponseHeaders({}), '');
}
