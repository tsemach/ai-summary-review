'use client';

import * as React from 'react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useMutation, useQuery } from '@tanstack/react-query';
import { reviewsApi, type GetModelsResponse, type Model } from './reviewsApi';
import { Spinner } from '@/components/ui/spinner';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

// const models = [
//   {
//     value: 'openai-gpt-3.5-turbo',
//     label: 'OpenAI GPT-3.5 Turbo',
//   },
//   {
//     value: 'llama3.1',
//     label: 'OLLaMA 3.1',
//   },
// ];

type ModelSelectorProps = {
  className?: string;
};

export function ModelSelector({ className }: ModelSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const modlesQuery = useQuery<GetModelsResponse>({
    queryKey: ['models'],
    queryFn: () => reviewsApi.fetchModels(),
  });

  const currentModelQuery = useQuery<Model>({
    queryKey: ['models', 'current'],
    queryFn: () => reviewsApi.fetchCurrentModel(),
  });

  const currentModelMutation = useMutation({
    mutationFn: (modelValue: string) => reviewsApi.setCurrentModel(modelValue),
  });

  React.useEffect(() => {
    if (currentModelMutation.isSuccess && currentModelMutation.data) {
      const data = currentModelMutation.data as Model;
      const newValue = data.value ?? data.label ?? '';

      if (newValue) {
        setValue(newValue);
      }
      setOpen(false);
    }
  }, [currentModelMutation.isSuccess, currentModelMutation.data]);

  React.useEffect(() => {
    if (currentModelQuery.data?.value && !value) {
      setValue(currentModelQuery.data.value);
    }
  }, [currentModelQuery.data?.value, value]);

  if (modlesQuery.isLoading || currentModelQuery.isLoading) {
    return (
      <div className="flex flex-col gap-5">
        <Spinner />
      </div>
    );
  }

  if (modlesQuery.isError || currentModelQuery.isError) {
    return (
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Couldn't fetch models</AlertDialogTitle>
            <AlertDialogDescription>
              We were unable to fetch available models from the server. You can
              continue by choosing the default OpenAI model.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-white bg-blue-800">
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'w-[200px] justify-between text-white bg-blue-800 border-black-600 cursor-pointer',
            className
          )}
        >
          {value
            ? modlesQuery.data?.find((framework) => framework.value === value)
                ?.label
            : (currentModelQuery.data?.label ?? 'Select model')}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search model..." />
          <CommandList>
            <CommandEmpty>No model found.</CommandEmpty>
            <CommandGroup>
              {modlesQuery.data?.map((model) => (
                <CommandItem
                  key={model.value}
                  value={model.value}
                  onSelect={(currentValue) => {
                    const next = currentValue === value ? '' : currentValue;
                    setValue(next);
                    setOpen(false);
                    currentModelMutation.mutate(currentValue);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === model.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {model.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
