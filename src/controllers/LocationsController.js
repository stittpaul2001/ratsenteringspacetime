import { locationsService } from "../services/LocationsService.js";
import BaseController from "../utils/BaseController.js";


export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)


  }


  /**
* Creates a new value from request body and returns the value
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/

  async getLocations(request, response, next) {
    try {
      const locations = await locationsService.getLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }
}