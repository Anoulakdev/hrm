import { Injectable } from '@nestjs/common';
// import { CreateHrmDto } from './dto/create-hrm.dto';
// import { UpdateHrmDto } from './dto/update-hrm.dto';
import { externalApi } from '../utils/external-api';
import { EmployeeQueryDto } from './dto/employee.dto';

@Injectable()
export class HrmService {
  async department(): Promise<any[]> {
    try {
      const response = await externalApi.get<any[]>(
        '/organization-svc/department/get',
      );
      return response.data;
    } catch (err: unknown) {
      let message = 'Failed to fetch departments';
      if (err instanceof Error) message = err.message;
      console.error(message);
      throw new Error(message);
    }
  }

  async division(): Promise<any[]> {
    try {
      const response = await externalApi.get<any[]>(
        '/organization-svc/division/get',
      );
      return response.data;
    } catch (err: unknown) {
      let message = 'Failed to fetch divisions';
      if (err instanceof Error) message = err.message;
      console.error(message);
      throw new Error(message);
    }
  }

  async office(): Promise<any[]> {
    try {
      const response = await externalApi.get<any[]>(
        '/organization-svc/office/get',
      );
      return response.data;
    } catch (err: unknown) {
      let message = 'Failed to fetch offices';
      if (err instanceof Error) message = err.message;
      console.error(message);
      throw new Error(message);
    }
  }

  async unit(): Promise<any[]> {
    try {
      const response = await externalApi.get<any[]>(
        '/organization-svc/unit/get',
      );
      return response.data;
    } catch (err: unknown) {
      let message = 'Failed to fetch units';
      if (err instanceof Error) message = err.message;
      console.error(message);
      throw new Error(message);
    }
  }

  async positiongroup(): Promise<any[]> {
    try {
      const response = await externalApi.get<any[]>(
        '/organization-svc/positionGroup/get',
      );
      return response.data;
    } catch (err: unknown) {
      let message = 'Failed to fetch positionGroups';
      if (err instanceof Error) message = err.message;
      console.error(message);
      throw new Error(message);
    }
  }

  async positioncode(): Promise<any[]> {
    try {
      const response = await externalApi.get<any[]>(
        '/organization-svc/positionCode/get',
      );
      return response.data;
    } catch (err: unknown) {
      let message = 'Failed to fetch positionCodes';
      if (err instanceof Error) message = err.message;
      console.error(message);
      throw new Error(message);
    }
  }

  async position(): Promise<any[]> {
    try {
      const response = await externalApi.get<any[]>(
        '/organization-svc/position/get',
      );
      return response.data;
    } catch (err: unknown) {
      let message = 'Failed to fetch positions';
      if (err instanceof Error) message = err.message;
      console.error(message);
      throw new Error(message);
    }
  }

  async employee(query?: EmployeeQueryDto): Promise<any[]> {
    try {
      const response = await externalApi.get<any[]>(
        '/organization-svc/employee/get',
        {
          params: query, // 👈 ส่ง query เข้าไปตรงนี้
        },
      );

      return response.data;
    } catch (err: unknown) {
      let message = 'Failed to fetch employees';
      if (err instanceof Error) message = err.message;
      console.error(message);
      throw new Error(message);
    }
  }
}
