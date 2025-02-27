import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabaseObject } from "../../services/supabase";
import baseController from "../../shared/base.controller";
import { Request, Response, NextFunction } from "express";
import { LoginDto } from '../controllers/dto/Login.dto';
import { CustomRequest } from "../../shared/guards/jwt.guard";
import AgendaApplication from "../../application/agenda.application";


    export default class  {
        private application: AgendaApplication;
        
        constructor() {
            this.application = new AgendaApplication();
        }
        public getAgenda = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
            try {
                return res.status(200).json({
                    status: 'success',
                    message: 'Obtencion de agenda exitoso',
                    user: this.application.getOne(1)
                });
                    
            } catch (error) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Obtencion de agenda fallido',
                    error: error
                });
                    
            }

        }

        public createAgenda = async (req: CustomRequest, res: Response, next: NextFunction): Promise<any> => {
            try {
              const agendaData = req.body;
              const result = await this.application.create(agendaData,req.supabase as SupabaseClient<any, "public", any>);
              
              return res.status(201).json({
                status: 'success',
                message: 'Creación de agenda exitosa',
                data: result
              });
                  
            } catch (error) {
              return res.status(500).json({
                status: 'error',
                message: 'Creación de agenda fallida',
                error: error
              });
                  
            }
          }
    
    }