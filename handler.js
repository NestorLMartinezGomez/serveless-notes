/*
 * Title: handler.js StarterService API
 * Serverless Starter Service
 * Author: Nestor L Martinez
 * Publisher: UniqueSoftwareDevelopment
 * July 19, 2019
 *
 */

const message = ({time, ...rest}) => new Promise((resolve, reject) => setTimeout(() => {
  resolve(`${rest.copy} (with a delay)`);
}, time * 1000)
);

export const starterService = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `You are now Serverless on AWS! ${(await message({ time: 1, copy: "Your serverless lambda has executed as it should!"}))}`,
      input: event
    })
  };

  callback(null, response);
};
