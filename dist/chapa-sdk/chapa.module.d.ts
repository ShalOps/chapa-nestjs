import { DynamicModule } from '@nestjs/common';
import { ChapaOptions, ChapaAsyncOptions } from './interfaces';
export declare class ChapaModule {
    /**
     * Registers a configured Chapa Module for import into the current module
     */
    static register(options: ChapaOptions): DynamicModule;
    /**
     * Registers a configured Chapa Module for import into the current module
     * using dynamic options (factory, etc)
     */
    static registerAsync(options: ChapaAsyncOptions): DynamicModule;
    private static createProviders;
    private static createOptionsProvider;
}
