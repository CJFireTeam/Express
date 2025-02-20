import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabaseObject } from "../../services/supabase";
import baseController from "../../shared/base.controller";
import { Request, Response, NextFunction } from "express";

export default class extends baseController {
    

        public login = async (request: Request, response: Response, next: NextFunction): Promise<Response<any> | Response<any, Record<string, any>>> => {
            return response.status(500).send(this.service.auth.signUp({email, password}));
            
    }
}