import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabaseObject } from "../services/supabase";

export default class {

    protected service:SupabaseClient<any, "public", any>;

    constructor() {
        this.service = supabaseObject;
    }
}